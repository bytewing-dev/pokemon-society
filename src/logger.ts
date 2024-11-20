import winston from 'winston';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};

const level = () => {
    const env: string = process.env.NODE_ENV || 'development'
    const isDevelopment: boolean = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
};

winston.addColors(colors)

const format: winston.Logform.Format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`,)
);

const transports: (winston.transports.ConsoleTransportInstance | winston.transports.FileTransportInstance)[] = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    new winston.transports.File({ filename: 'logs/all.log' }),
];

const Logger: winston.Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});

export default Logger;
