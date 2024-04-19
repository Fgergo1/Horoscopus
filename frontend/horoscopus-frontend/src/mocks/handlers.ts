import {http, HttpResponse} from 'msw'


export const handlers = [
    http.post('/api/user/register', () => {
        return new HttpResponse(null, {
            status : 201
        })
    })
]