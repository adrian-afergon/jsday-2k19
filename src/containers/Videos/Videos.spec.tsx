import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Videos } from './';
import { VideosRepository } from '../../repositories/VideosRepository';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { AppDependencies } from '../../AppDependencies';

describe('Videos', () => {

  let dependencies: AppDependencies;
  let videosRepository: VideosRepository;
  let categoriesRepository: CategoriesRepository;
  beforeEach(() => {
    videosRepository = {
      getVideos: jest.fn(() => Promise.resolve([])),
    };

    categoriesRepository = {
      getCategories: jest.fn(() => Promise.resolve([])),
    };

    dependencies = { videosRepository, categoriesRepository};
  });

  it('should get the starting values when component is loaded', () => {
    const renderResult: RenderResult = render(
      <Videos dependencies={dependencies}/>,
    );
    expect(videosRepository.getVideos).toHaveBeenCalledTimes(1);
    expect(categoriesRepository.getCategories).toHaveBeenCalledTimes(1);
  });
});
