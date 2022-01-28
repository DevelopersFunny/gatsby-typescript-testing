// import path from 'path'
import initStoryshots, {
  Stories2SnapsConverter,
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'
//import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer'
import { addSerializer } from 'jest-specific-snapshot'

//addSerializer(styleSheetSerializer)

initStoryshots({
  // integrityOptions: { cwd: path.resolve(__dirname, '../../shadito') }, // it will start searching from the current directory
  suite: 'ButtonProperties',
  test: multiSnapshotWithOptions({}),
  stories2snapsConverter: new Stories2SnapsConverter({
    // This puts all my *.snaps.js in a __snapshots__ folder next to my stories folder, the default is to have them next to the *.stories.js files themselves
    snapshotsDirName: '__snapshots__',
    // This just sets the extension to *.snap.js which I like
    snapshotExtension: '.tsx.snap',
    storiesExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
})
