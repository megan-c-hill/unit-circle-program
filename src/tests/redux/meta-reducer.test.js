import Chance from 'chance';
import rootReducer from "../../redux/meta-reducer";
import {
    SET_FUNCTIONS, SET_HISTORY,
    SET_HOME_PAGE_FORM_COMPLETE,
    SET_NAME,
    SET_NUMBER_CORRECT,
    SET_QUESTION_NUMBER,
    SET_RANGE
} from "../../redux/action-types";

const chance = new Chance();

describe('meta-reducer', () => {
    let actualState,
        expectedState,
        defaultState;

    beforeEach(() => {
        defaultState = {
            history: null,
            name: "",
            questionNumber: 1,
            numberCorrect: 0,
            range: null,
            functions: null,
            homePageFormComplete: true
        };

        expectedState = {
            history: chance.string(),
            name: chance.string(),
            questionNumber: chance.natural(),
            numberCorrect: chance.natural(),
            range: chance.string(),
            functions: chance.string(),
            homePageFormComplete: chance.bool()
        }
    });

    it('should have default values', () => {
        actualState = rootReducer( undefined , {
            data: chance.string(),
            type: chance.string()
        });

        expect(actualState).toEqual(defaultState);
    });

    it('should set name', () => {
        const expectedName = chance.string();
        const action = {
            data: expectedName,
            type: SET_NAME
        };

        actualState = rootReducer(expectedState, action);
        expect(actualState).toEqual({
            ...expectedState,
            name: expectedName
        });
    });

    it('should set question number', () => {
        const expectedQuestionNumber = chance.natural();
        const action = {
            data: expectedQuestionNumber,
            type: SET_QUESTION_NUMBER
        };

        actualState = rootReducer(expectedState, action);
        expect(actualState).toEqual({
            ...expectedState,
            questionNumber: expectedQuestionNumber
        });
    });

    it('should set number correct', () => {
        const expectedNumberCorrect = chance.natural();
        const action = {
            data: expectedNumberCorrect,
            type: SET_NUMBER_CORRECT
        };

        actualState = rootReducer(expectedState, action);
        expect(actualState).toEqual({
            ...expectedState,
            numberCorrect: expectedNumberCorrect
        });
    });

    it('should set range', () => {
        const expectedRange = chance.string();
        const action = {
            data: expectedRange,
            type: SET_RANGE
        };

        actualState = rootReducer(expectedState, action);
        expect(actualState).toEqual({
            ...expectedState,
            range: expectedRange
        });
    });

    it('should set functions', () => {
        const expectedFunctions = chance.string();
        const action = {
            data: expectedFunctions,
            type: SET_FUNCTIONS
        };

        actualState = rootReducer(expectedState, action);
        expect(actualState).toEqual({
            ...expectedState,
            functions: expectedFunctions
        });
    });

    it('should set home page form complete', () => {
        const expectedHomePageFormComplete = chance.string();
        const action = {
            data: expectedHomePageFormComplete,
            type: SET_HOME_PAGE_FORM_COMPLETE
        };

        actualState = rootReducer(expectedState, action);
        expect(actualState).toEqual({
            ...expectedState,
            homePageFormComplete: expectedHomePageFormComplete
        });
    });

    it('should set history', () => {
        const expectedHistory = chance.string();
        const action = {
            data: expectedHistory,
            type: SET_HISTORY
        };

        actualState = rootReducer(expectedState, action);
        expect(actualState).toEqual({
            ...expectedState,
            history: expectedHistory
        });
    });
});