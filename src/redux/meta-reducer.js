import {
    SET_FUNCTIONS, SET_HISTORY,
    SET_HOME_PAGE_FORM_COMPLETE,
    SET_NAME,
    SET_NUMBER_CORRECT,
    SET_QUESTION_NUMBER,
    SET_RANGE
} from "../constants/action-types";

const initialState = {
    history: null,
    name: "",
    questionNumber: 1,
    numberCorrect: 0,
    range: null,
    functions: null,
    homePageFormComplete: true
};

const setName = (state, name) => ({
    ...state,
    name
});

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

const setHomePageFormComplete = (state, homePageFormComplete) => ({
    ...state,
    homePageFormComplete
});

const setHistory = (state, history) => ({
    ...state,
    history
});

const reducerMap = {
    [SET_NAME]: setName,
    [SET_HISTORY]: setHistory,
    [SET_HOME_PAGE_FORM_COMPLETE]: setHomePageFormComplete,
    [SET_QUESTION_NUMBER]: setQuestionNumber,
    [SET_NUMBER_CORRECT]: setNumberCorrect,
    [SET_RANGE]: setRange,
    [SET_FUNCTIONS]: setFunctions
};

function rootReducer(state = initialState, {type, data}) {
    if (reducerMap[type]) {
        return reducerMap[type](state, data);
    }

    return state;
}

export default rootReducer;