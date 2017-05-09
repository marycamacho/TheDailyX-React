/**
 * Created by marycamacho on 5/2/17.
 */
import { getData } from '../data';
import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const FETCH_CURRENT_USER = 'FETCH_USER';

    export function getDefaultData() {
        return {
            type: GET_DATA,
            payload: getData()
        };
    }

    export function fetchUser () {

        const request = axios.get('/fetch_current_user').then(function (user) {
            return {
                user
            };
        });

        return {
            type: FETCH_CURRENT_USER,
            payload: request
        };
    }
