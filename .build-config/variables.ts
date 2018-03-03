
import {resolve} from 'path';


const ROOT = resolve(__dirname, '..');

export const SRC_DIR = resolve(ROOT, 'src');
export const TEST_DIR = resolve(ROOT, 'test');
export const PUB_DIR = resolve(ROOT, 'public');
export const STORIES_DIR = resolve(TEST_DIR, 'stories');
