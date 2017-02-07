/// <reference path='./FhirClient.d.ts' />

import fhir from './nativeFhir';

export var FhirClient = (function() {

    function FhirClient (config) {
        this.client = fhir(config);
    }

    FhirClient.prototype.conformance = function(query) {
    	return this.client.conformance(query);
    };
    FhirClient.prototype.document = function(query) {
    	return this.client.document(query);
    };
    FhirClient.prototype.profile = function(query) {
    	return this.client.profile(query);
    };
    FhirClient.prototype.transaction = function(query) {
    	return this.client.transaction(query);
    };
    FhirClient.prototype.history = function(query) {
    	return this.client.history(query);
    };
    FhirClient.prototype.typeHistory = function(query) {
    	return this.client.typeHistory(query);
    };
    FhirClient.prototype.resourceHistory = function(query) {
    	return this.client.resourceHistory(query);
    };
    FhirClient.prototype.read = function(query) {
    	return this.client.read(query);
    };
    FhirClient.prototype.vread = function(query) {
    	return this.client.vread(query);
    };
    FhirClient.prototype.delete = function(query) {
    	return this.client.delete(query);
    };
    FhirClient.prototype.create = function(query) {
    	return this.client.create(query);
    };
    FhirClient.prototype.validate = function(query) {
    	return this.client.validate(query);
    };
    FhirClient.prototype.search = function(query) {
    	return this.client.search(query);
    };
    FhirClient.prototype.update = function(query) {
    	return this.client.update(query);
    };
    FhirClient.prototype.nextPage = function(query) {
    	return this.client.nextPage(query);
    };
    FhirClient.prototype.prevPage = function(query) {
    	return this.client.prevPage(query);
    };
    FhirClient.prototype.resolve = function(query) {
    	return this.client.resolve(query);
    };

    return FhirClient;

}());
