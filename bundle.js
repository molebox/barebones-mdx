import Bundler from 'parcel-bundler';
import Path from 'path';
const __dirname = Path.resolve();


(async function() {
    const entryFiles = Path.join(__dirname, './index.html');
    const options = {
    outDir: './public'
}
    // Initializes a bundler using the entrypoint location and options provided
    const bundler = new Bundler(entryFiles, options);
  
    // Run the bundler, this returns the main bundle
    // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
    await bundler.bundle();
  })();