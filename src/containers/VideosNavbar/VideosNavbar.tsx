import * as React from 'react';
import './VideosNavbar.scss';
import { Video, VideoId } from '../../models/video';

interface VideosNavbarProps {
  videos: Video [];
  categories: string[];
}

export const VideosNavbar: React.FC<VideosNavbarProps> = ({videos, categories}) => (
  <nav className="VideosNavbar" data-testid="VideosNavbar">
    Hello from VideosNavbar!
  </nav>
);

VideosNavbar.displayName = 'VideosNavbar';
