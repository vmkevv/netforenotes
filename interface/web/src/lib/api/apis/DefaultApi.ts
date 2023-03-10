/* tslint:disable */
/* eslint-disable */
/**
 * Netforenotes app API docs
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorMessage,
  Note,
  NoteCreation,
  NoteListItem,
} from '../models';
import {
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    NoteFromJSON,
    NoteToJSON,
    NoteCreationFromJSON,
    NoteCreationToJSON,
    NoteListItemFromJSON,
    NoteListItemToJSON,
} from '../models';

export interface AddNoteRequest {
    noteCreation?: NoteCreation;
}

export interface DeleteNoteRequest {
    id: string;
}

export interface GetNoteRequest {
    id: string;
}

export interface GetNotesRequest {
    sort: GetNotesSortEnum;
    order: GetNotesOrderEnum;
    search?: string;
}

export interface UpdateNoteRequest {
    note?: Note;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Add new note
     */
    async addNoteRaw(requestParameters: AddNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/note`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NoteCreationToJSON(requestParameters.noteCreation),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add new note
     */
    async addNote(requestParameters: AddNoteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addNoteRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a note by ID
     */
    async deleteNoteRaw(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/note/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a note by ID
     */
    async deleteNote(requestParameters: DeleteNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteNoteRaw(requestParameters, initOverrides);
    }

    /**
     * Get a note by ID
     */
    async getNoteRaw(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Note>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/note/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteFromJSON(jsonValue));
    }

    /**
     * Get a note by ID
     */
    async getNote(requestParameters: GetNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Note> {
        const response = await this.getNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get notes list based on parameters
     */
    async getNotesRaw(requestParameters: GetNotesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NoteListItem>>> {
        if (requestParameters.sort === null || requestParameters.sort === undefined) {
            throw new runtime.RequiredError('sort','Required parameter requestParameters.sort was null or undefined when calling getNotes.');
        }

        if (requestParameters.order === null || requestParameters.order === undefined) {
            throw new runtime.RequiredError('order','Required parameter requestParameters.order was null or undefined when calling getNotes.');
        }

        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/notes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NoteListItemFromJSON));
    }

    /**
     * Get notes list based on parameters
     */
    async getNotes(requestParameters: GetNotesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NoteListItem>> {
        const response = await this.getNotesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a note
     */
    async updateNoteRaw(requestParameters: UpdateNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/note`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: NoteToJSON(requestParameters.note),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update a note
     */
    async updateNote(requestParameters: UpdateNoteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateNoteRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetNotesSortEnum = {
    Date: 'date',
    Title: 'title'
} as const;
export type GetNotesSortEnum = typeof GetNotesSortEnum[keyof typeof GetNotesSortEnum];
/**
 * @export
 */
export const GetNotesOrderEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type GetNotesOrderEnum = typeof GetNotesOrderEnum[keyof typeof GetNotesOrderEnum];
