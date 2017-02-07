import { Component } from '@angular/core';
import { FhirClient } from 'ng-fhir/FhirClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private client: FhirClient;

  private config: any = {
    'baseUrl': 'http://fhirtest.uhn.ca/baseDstu2',
    'credentials': 'same-origin',
  };

  public conformance: any = {};
  public history: any = {};
  public resourceHistory: any = {};
  public patients: any[] = [];
  public condition: any = {};
  public createResponse: any = {};

  constructor(){

    this.client = new FhirClient(this.config);

    this.client.conformance({}).then((response) => {
      if(response.data){
        this.conformance = (response.data || []);
      }
    }, (err) => {
      console.log(err);
    });

    this.client.history({}).then((response) => {
      if(response.data){
        this.history = (response.data || []);
      }
    }, (err) => {
      console.log(err);
    });

    this.client.resourceHistory({type: 'Patient', id: '1707'}).then((response) => {
      if(response.data){
        this.resourceHistory = (response.data || []);
      }
    }, (err) => {
      console.log(err);
    });

    this.client.search({type: 'Patient', query: {}}).then((response) => {
      if(response.data){
        this.patients = (response.data.entry || []);
      }
    }, (err) => {
      console.log(err);
    });

    this.client.read({type: 'Condition', id: "2277"}).then((response) => {
      if(response.data){
        this.condition = (response.data || {});
      }
    }, (err) => {
      console.log(err);
    });

    this.client.create(
      {
        resource: {
          "resourceType": "Observation",
          "meta": {
            "profile": ["http://www.example.ex/fhir/StructureDefinition/ExamplePersonalBelief"]
          },
          "identifier": [{
            "value": "b001"
          }],
          "status": "final",
          "category": [{
            "coding": [{
              "system": "http://hl7.org/fhir/observation-category",
              "code": "social-history",
              "display": "Social History"
            }]
          }],
          "code": {
            "coding": [{
              "system": "http://loinc.org",
              "code": "75281-6",
              "display": "Personal belief"
            }]
          },
          "subject": {
            "reference": "Patient/1707"
          },
          "effectiveDateTime": "2009-07-21T10:22:00+02:00",
          "performer": [{
            "reference": "Practitioner/3165"
          }],
          "valueString": "Patient refuses all blood transfusion and administration of primary blood components and minor fractions"
        }
      }).then((response) => {
      this.createResponse = response;
    }, (err) => {
      console.log(err);
    });

  }

  stringify(obj: any): string{
    return JSON.stringify(obj,null,'  ');
  }
}
