import Chance from 'chance';
import {
    SET_FUNCTIONS, SET_HISTORY,
    SET_HOME_PAGE_FORM_COMPLETE,
    SET_NAME,
    SET_NUMBER_CORRECT,
    SET_QUESTION_NUMBER,
    SET_RANGE
} from "../../redux/action-types";
import {
    setFunctions,
    setHistory,
    setHomePageFormComplete,
    setName, setNumberCorrect,
    setQuestionNumber,
    setRange
} from "../../redux/meta-actions";
const chance = new Chance();


describe('meta-actions.js', () => {
    it('should dispatch an action when setName is called', () => {
        const expectedName = chance.string();

        const expectedResult = {
            data: expectedName,
            type: SET_NAME
        };

        const actualResult = setName(expectedName);

        expect(actualResult).toEqual(expectedResult)
    });

    it('should dispatch an action when setQuestionNumber is called', () => {
        const expectedName = chance.string();

        const expectedResult = {
            data: expectedName,
            type: SET_QUESTION_NUMBER
        };

        const actualResult = setQuestionNumber(expectedName);

        expect(actualResult).toEqual(expectedResult)
    });

    it('should dispatch an action when setNumberCorrect is called', () => {
        const expectedNumberCorrect = chance.string();

        const expectedResult = {
            data: expectedNumberCorrect,
            type: SET_NUMBER_CORRECT
        };

        const actualResult = setNumberCorrect(expectedNumberCorrect);

        expect(actualResult).toEqual(expectedResult)
    });

    it('should dispatch an action when setRange is called', () => {
        const expectedRange = chance.string();

        const expectedResult = {
            data: expectedRange,
            type: SET_RANGE
        };

        const actualResult = setRange(expectedRange);

        expect(actualResult).toEqual(expectedResult)
    });

    it('should dispatch an action when setFunctions is called', () => {
        const expectedFunctions = chance.string();

        const expectedResult = {
            data: expectedFunctions,
            type: SET_FUNCTIONS
        };

        const actualResult = setFunctions(expectedFunctions);

        expect(actualResult).toEqual(expectedResult)
    });

    it('should dispatch an action when setHomePageFormComplete is called', () => {
        const expectedHomePageFormComplete = chance.string();

        const expectedResult = {
            data: expectedHomePageFormComplete,
            type: SET_HOME_PAGE_FORM_COMPLETE
        };

        const actualResult = setHomePageFormComplete(expectedHomePageFormComplete);

        expect(actualResult).toEqual(expectedResult)
    });

    it('should dispatch an action when setHistory is called', () => {
        const expectedHistory = chance.string();

        const expectedResult = {
            data: expectedHistory,
            type: SET_HISTORY
        };

        const actualResult = setHistory(expectedHistory);

        expect(actualResult).toEqual(expectedResult)
    });
});