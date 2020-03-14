import Axios from 'axios';
import { put } from 'redux-saga/effects'
import * as actions from "../Actions/forms";

export function* fetchFormControls(action){
    try {
        const formData = yield Axios.get(`http://localhost:8080/control/${action.menuParams}`);
        const controls = formData.data;

        yield put(actions.storeFormControl(controls))
        
    } catch (error) {
        console.log(error)
    }
}

