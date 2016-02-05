import reducer from '../../../js/reducers/settings';
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

describe('Settings Reducer', () => {
  it('should get the circle token from the search query when there', () => {
    const { search } = global.window.location;
    global.window.location.search = '?circleToken=mycircletoken';

    const expectedResult = {
      circleToken: 'mycircletoken',
      dashboardName: 'Build Dashboard',
      projectNameMapping: {},
      showBranches: false,
      showInfo: true,
      specificProjects: [],
      visible: false
    };

    expect(reducer(undefined, {})).to.deep.equal(expectedResult);
    global.window.location.search = search;
  });

  it('should default to nothing when circle token isnt there', () => {
    const state = {
      circleToken: ''
    };
    const action = {
      type: 'UPDATE_CIRCLE_TOKEN',
      value: 'mycircletoken'
    }
    const expectedResult = {
      circleToken: 'mycircletoken'
    };

    expect(reducer(state, action)).to.deep.equal(expectedResult);
  });

  it('should update the dashboard name', () => {
    const state = {
      dashboardName: 'Build Dashboard'
    };
    const action = {
      type: 'UPDATE_DASHBOARD_NAME',
      value: 'My new dashboard name'
    };
    const expectedResult = {
      dashboardName: 'My new dashboard name'
    };

    deepFreeze(state);

    expect(reducer(state, action)).to.deep.equal(expectedResult);
  });

  describe('should update the specific projects array', () => {
    it('when the project is not already in the array', () => {
      const state = {
        specificProjects: []
      };
      const action = {
        type: 'UPDATE_SPECIFIC_PROJECTS',
        value: { project: 'my project', show: false }
      };
      const expectedResult = {
        specificProjects: [ 'my project' ]
      };

      deepFreeze(state);

      expect(reducer(state, action)).to.deep.equal(expectedResult);
    });

    it('when the project is already in the array', () => {
      const state = {
        specificProjects: [ 'my other project', 'my project', 'another project I dont like' ]
      };
      const action = {
        type: 'UPDATE_SPECIFIC_PROJECTS',
        value: { project: 'my project', show: true }
      };
      const expectedResult = {
        specificProjects: [ 'my other project', 'another project I dont like' ]
      };

      deepFreeze(state);

      expect(reducer(state, action)).to.deep.equal(expectedResult);
    });
  });


  describe('should update the project name mapping', () => {
    it('when the project is not already in the object', () => {
      const state = {
        projectNameMapping: {}
      };
      const action = {
        type: 'UPDATE_PROJECT_NAME_MAPPING',
        value: { reponame: 'my project', newName: 'much better name!' }
      };
      const expectedResult = {
        projectNameMapping: { 'my project': 'much better name!' }
      };

      deepFreeze(state);

      expect(reducer(state, action)).to.deep.equal(expectedResult);
    });

    it('when the project is already in the object but changing name', () => {
      const state = {
        projectNameMapping: { 'my project': 'much better name!', 'another project': 'didnt like that name either' }
      };
      const action = {
        type: 'UPDATE_PROJECT_NAME_MAPPING',
        value: { reponame: 'my project', newName: 'I didnt like that name' }
      };
      const expectedResult = {
        projectNameMapping: { 'my project': 'I didnt like that name', 'another project': 'didnt like that name either' }
      };

      deepFreeze(state);

      expect(reducer(state, action)).to.deep.equal(expectedResult);
    });

    it('when the project is already in the object and the new name is blank', () => {
      const state = {
        projectNameMapping: { 'my project': 'much better name!', 'another project': 'didnt like that name either' }
      };
      const action = {
        type: 'UPDATE_PROJECT_NAME_MAPPING',
        value: { reponame: 'my project', newName: '' }
      };
      const expectedResult = {
        projectNameMapping: { 'another project': 'didnt like that name either' }
      };

      deepFreeze(state);

      expect(reducer(state, action)).to.deep.equal(expectedResult);
    });
  });

  it('should toggle whether the info is shown', () => {
    const state = {
      showInfo: true
    };
    const action = {
      type: 'TOGGLE_PROJECT_INFO'
    };
    const expectedResult = {
      showInfo: false
    };

    deepFreeze(state);

    expect(reducer(state, action)).to.deep.equal(expectedResult);

    const andBackAgain = {
      showInfo: true
    };
    expect(reducer(expectedResult, action)).to.deep.equal(andBackAgain);
  });

  it('should toggle whether to show branches', () => {
    const state = {
      showBranches: true
    };
    const action = {
      type: 'TOGGLE_PROJECT_BRANCHES'
    };
    const expectedResult = {
      showBranches: false
    };

    deepFreeze(state);

    expect(reducer(state, action)).to.deep.equal(expectedResult);

    const andBackAgain = {
      showBranches: true
    };
    expect(reducer(expectedResult, action)).to.deep.equal(andBackAgain);
  });
});
