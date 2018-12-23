import {
    SET_FUNCTIONS,
    SET_HOME_PAGE_FORM_COMPLETE,
    SET_NAME,
    SET_NUMBER_CORRECT,
    SET_QUESTION_NUMBER,
    SET_RANGE
} from "../constants/action-types";

export const setName = (name) => ({
    data: name,
    type: SET_NAME
});

export const setQuestionNumber = (questionNumber) => ({
    data: questionNumber,
    type: SET_QUESTION_NUMBER
});

export const setNumberCorrect = (numberCorrect) => ({
    data: numberCorrect,
    type: SET_NUMBER_CORRECT
});

export const setRange = (range) => ({
    data: range,
    type: SET_RANGE
});

export const setFunctions = (functions) => ({
    data: functions,
    type: SET_FUNCTIONS
});

export const setHomePageFormComplete = (homePageFormComplete) => ({
    data: homePageFormComplete,
    type: SET_HOME_PAGE_FORM_COMPLETE
});