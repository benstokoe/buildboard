import { filterProjects }  from '../../../dataTransformers/projects';
import { expect } from 'chai';

describe('Projects data transformer', () => {
  it('should not filter a non array', () => {
    const project = { project: { reponame: 'My repo' } };
    expect(filterProjects(project)).to.deep.equal(project);
  });
});
