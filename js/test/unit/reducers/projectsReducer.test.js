import reducer from '../../../reducers/projects';
import { expect } from 'chai';
import tk from 'timekeeper';
import deepFreeze from 'deep-freeze';

describe('Projects Reducer', () => {
  it('should filter the projects given to it', () => {
    const time = new Date(2016, 0, 16);
    tk.freeze(time);

    const state = {};
    const action = {
      type: 'GET_PROJECTS_SUCCESS',
      payload: [{
        author_date: '2016-01-14T15:33:19Z',
        author_email: 'thebestever@gmail.com',
        author_name: 'The Best-Ever',
        body: 'Doing something',
        branch: 'master',
        build_time_millis: 125692,
        canceled: false,
        canceler: null,
        lifecycle: 'finished',
        outcome: 'success',
        parallel: 1,
        reponame: 'some-circle-ci-dashboard-thing',
        running_builds: undefined,
        start_time: '2016-01-14T15:33:23.918Z',
        status: 'success',
        stop_time: '2016-01-14T15:35:29.610Z',
        subject: 'Did something',
        username: 'jesus'
      }, {
        author_date: '2016-01-14T15:33:19Z',
        author_email: 'thebestever@gmail.com',
        author_name: 'The Best-Ever',
        body: 'Doing something',
        branch: 'something-something',
        build_time_millis: 125692,
        canceled: false,
        canceler: null,
        lifecycle: 'queued',
        outcome: 'success',
        parallel: 1,
        reponame: 'some-circle-ci-dashboard-thing',
        running_builds: undefined,
        start_time: '2016-01-14T15:33:23.918Z',
        status: 'running',
        stop_time: '2016-01-14T15:35:29.610Z',
        subject: 'JC: Did something',
        username: 'jesus'
      }]
    };

    const expectedResult = {
      items: [{
        reponame: 'some-circle-ci-dashboard-thing',
        branches: [{
          author: 'The Best-Ever',
          authorInitials: 'JC',
          branch: 'something-something',
          buildLength: '02:05',
          lastRun: 'a day ago',
          reponame: 'some-circle-ci-dashboard-thing',
          status: 'queued'
        }],
        master: {
          author: 'The Best-Ever',
          authorInitials: 'The Best-Ever',
          branch: 'master',
          buildLength: '02:05',
          lastRun: 'a day ago',
          reponame: 'some-circle-ci-dashboard-thing',
          status: 'success'
        }
      }]
    };

    deepFreeze(state);

    expect(reducer(state, action)).to.deep.equal(expectedResult);
  });
});
