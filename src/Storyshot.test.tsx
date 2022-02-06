//@ts-nocheck
import path from 'path'
import initStoryshots, {
  Stories2SnapsConverter,
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

/**
 * Multi Snapshots code peer stories in their own folder
 */
initStoryshots({
  suite: 'Stories storyshots',
  test: multiSnapshotWithOptions(),
  stories2snapsConverter: new Stories2SnapsConverter({
    // This puts all my *.snaps.js in a __snapshots__ folder next to my stories folder, the default is to have them next to the *.stories.js files themselves
    snapshotsDirName: '__snapshots__',
    // This just sets the extension to *.snap.js which I like
    snapshotExtension: '.tsx.snap',
    // This es the extension to your stories
    storiesExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
})

/**
 * Function to customize the snapshot location
 * TODO: create the interface or types to: filename and getMatchOptions, and then remove: // @ts-nocheck
 */
const getMatchOptions = ({ context: { fileName } }) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(path.dirname(fileName), '__image_snapshots__')
  return { customSnapshotsDir: snapshotPath }
}

/**
 * Image snapshots peer stories in their own folder
 */
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({ getMatchOptions }),
})
