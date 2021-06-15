import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as LearnosityModule from 'learnosity-sdk-nodejs';
import * as sha256 from 'crypto-js/sha256';
import * as _ from 'underscore';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LrnSDKService {
  
  constructor() { }

  hashSignatureArray(signatureArray) {
    return sha256(signatureArray.join('_')).toString();
  }

  convertRequestPacketToObject(requestPacket) {
    if (_.isString(requestPacket)) {
      return JSON.parse(requestPacket);
    } else {
      return requestPacket;
    }
  }

  insertSecurityInformationToAssessObject(requestPacket, securityPacket, secret) {
    if (requestPacket.questionsApiActivity) {
      var questionsApi = requestPacket.questionsApiActivity;
      var domain = 'assess.learnosity.com';

      if (securityPacket.domain) {
        domain = securityPacket.domain;
      } else if (questionsApi.domain) {
        domain = questionsApi.domain;
      }

      requestPacket.questionsApiActivity.consumer_key = securityPacket.consumer_key;
      requestPacket.questionsApiActivity.timestamp = securityPacket.timestamp;
      requestPacket.questionsApiActivity.user_id = securityPacket.user_id;
      requestPacket.questionsApiActivity.signature = this.hashSignatureArray([
        securityPacket.consumer_key,
        domain,
        securityPacket.timestamp,
        securityPacket.user_id,
        secret
      ]);
    }
  }

  generateSignature(
    service,
    securityPacket,
    secret,
    requestString,
    action
  ) {
    let signatureArray = [
      securityPacket.consumer_key,
      securityPacket.domain,
      securityPacket.timestamp
    ];

    if (securityPacket.user_id) {
      signatureArray.push(securityPacket.user_id);
    }
    signatureArray.push(secret);

    // Add the requestPacket if necessary
    var signRequestData = !(service === 'assess' || service === 'questions');

    if (signRequestData && requestString && requestString.length > 0) {
      signatureArray.push(requestString);
    }

    // Add the action if necessary
    if (action && action.length > 0) {
      signatureArray.push(action);
    }

    return this.hashSignatureArray(signatureArray);
  }

  init = function (
    service,
    securityPacket,
    secret,
    requestPacket,
    action
  ) {
    // requestPacket can be passed in as an object or as an already encoded
    // string.
    var requestObject = this.convertRequestPacketToObject(requestPacket);

    // if (telemetryEnabled) {
    //     addTelemetryData(requestObject);
    // }

    // Automatically timestamp the security packet
    if (!securityPacket.timestamp) {
      securityPacket.timestamp = moment().utc().format('YYYYMMDD-HHmm');
    }

    if (service === 'assess') {
      this.insertSecurityInformationToAssessObject(requestObject, securityPacket, secret);
    }

    // Automatically populate the user_id of the security packet.
    if (_.contains(['author', 'items', 'reports'], service)) {
      // The Events API requires a user_id, so we make sure it's a part
      // of the security packet as we share the signature in some cases
      if (!securityPacket.user_id && requestObject && requestObject.user_id) {
        securityPacket.user_id = requestObject.user_id;
      }
    }

    var requestString = JSON.stringify(requestObject);

    // Generate the signature based on the arguments provided
    securityPacket.signature = this.generateSignature(
      service,
      securityPacket,
      secret,
      requestString,
      action
    );

    var output;

    if (service === 'data') {
        output = {
          'security': JSON.stringify(securityPacket),
          'request': requestString,
          'action': action
        };
    } else if (service === 'questions') {
      // Questions API Requests don't need `domain`
      delete securityPacket.domain;

      output = _.extend(securityPacket, requestObject);
    } else if (service === 'assess') {
      output = requestObject;
    } else {
      output = {
        'security': securityPacket,
        'request': _.isString(requestPacket) ? requestString : requestObject
      };
    }
    // console.log(output);
    
    return output;
  };

  

  
}
