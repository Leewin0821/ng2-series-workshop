import { addProviders } from '@angular/core/testing/testing'
import { ApiService } from './api'
import { MockBackend } from '@angular/http/testing/mock_backend'
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http'
import { inject } from '@angular/core/testing/test_injector'
import { async } from '@angular/core/testing/async'
import { Observable } from 'rxjs'
describe( 'ApiService', ()=> {
    let http, api;

    beforeEach( ()=>addProviders( [
        MockBackend, BaseRequestOptions, ApiService, {
            provide: Http,
            useFactory: ( backend, options ) => new Http( backend, options ),
            deps: [ MockBackend, BaseRequestOptions ]
        }
    ] ) )

    beforeEach( inject( [ ApiService, Http ], ( apiService, httpService ) => {
        api = apiService
        http = httpService
    } ) )

    it( 'should make get request', async( () => {
        let response = { notes: [ 1, 2, 3 ] }

        // mockBackend.connections.subscribe(connection => {
        //     connection.mockRespond(new Response(
        //         new ResponseOptions({body: JSON.stringify(response), status:200})
        //     ))
        // })

        spyOn(http, 'get').and.returnValue(Observable.from([new Response(
                    new ResponseOptions({body: JSON.stringify(response), status:200})
                )]))

        api.get(`/notes`).subscribe(notes => {
            expect(notes).toEqual(response)
        })

    } ) )


} )