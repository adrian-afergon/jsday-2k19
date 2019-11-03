import * as React from 'react';
import { render } from '@testing-library/react';
import { Videos } from './';
import { AppDependencies, initializeDependencies } from '../../AppDependencies';

describe('Videos', () => {

  let dependencies: AppDependencies;
  beforeEach(() => {
    dependencies = initializeDependencies();
    dependencies.videosRepository.getVideos = jest.fn(() => Promise.resolve([]));
    dependencies.categoriesRepository.getCategories = jest.fn(() => Promise.resolve([]));
  });

  it('should get the starting values when component is loaded', () => {
    const {videosRepository, categoriesRepository} = dependencies;
    render(<Videos dependencies={dependencies}/>);
    expect(videosRepository.getVideos).toHaveBeenCalledTimes(1);
    expect(categoriesRepository.getCategories).toHaveBeenCalledTimes(1);
  });
});
