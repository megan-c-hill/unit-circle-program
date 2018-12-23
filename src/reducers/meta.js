import {
    SET_FUNCTIONS,
    SET_HOME_PAGE_FORM_COMPLETE,
    SET_NAME,
    SET_NUMBER_CORRECT,
    SET_QUESTION_NUMBER,
    SET_RANGE
} from "../constants/action-types";

const initialState = {
    name: "",
    questionNumber: 1,
    numberCorrect: 0,
    range: null,
    functions: null,
    homePageFormComplete: true
};

const setName = (state, name) => {
    console.log('name', name);
    return {
    ...state,
        name
    }
};

const setQuestionNumber = (state, questionNumber) => ({
    ...state,
    questionNumber
});

const setNumberCorrect = (state, numberCorrect) => ({
    ...state,
    numberCorrect
});

const setRange = (state, range) => ({
    ...state,
    range
});

const setFunctions = (state, functions) => ({
    ...state,
    functions
});

const setHomePageFormComplege = (state, homePageFormComplete) => ({
    ...state,
    homePageFormComplete
});

const reducerMap = {
    [SET_NAME]: setName,
    [SET_HOME_PAGE_FORM_COMPLETE]: setHomePageFormComplege,
    [SET_QUESTION_NUMBER]: setQuestionNumber,
    [SET_NUMBER_CORRECT]: setNumberCorrect,
    [SET_RANGE]: setRange,
    [SET_FUNCTIONS]: setFunctions
};

function rootReducer(state = initialState, {type, data}) {
    if(reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
}

export default rootReducer;