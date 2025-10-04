import cluster from 'cluster';
import { cpus } from 'os';

if (cluster.isPrimary) {
    const numCPUs = cpus().length;
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    import('./main').then(({ bootstrap }) => {
        bootstrap();
    });
    console.log(`Worker ${process.pid} started`);
}
