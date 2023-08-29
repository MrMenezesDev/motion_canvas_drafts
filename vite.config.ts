import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths'
import ffmpeg from '@motion-canvas/ffmpeg';

export default defineConfig({
  plugins: [
    motionCanvas(),
    ffmpeg(),
    tsconfigPaths(),
  ],
});
