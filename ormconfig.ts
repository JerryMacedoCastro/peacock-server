import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: "postgres",
    host: "ec2-54-147-207-184.compute-1.amazonaws.com",
    port: 5432,
    username: "bitltkeffygbcj",
    password: "e13e1029bcfd985ea090cbf9a11e23204e22fc4759581ba5481edf16f847e781",
    database: "d6uaskscevvcem",
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    synchronize: true,
    // dropSchema: true,
    extra: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    url: "postgres://bitltkeffygbcj:e13e1029bcfd985ea090cbf9a11e23204e22fc4759581ba5481edf16f847e781@ec2-54-147-207-184.compute-1.amazonaws.com:5432/d6uaskscevvcem"
};

// const config: ConnectionOptions = {
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "shazam",
//     database: "PEACOCKDB",
//     entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
// };

// const config: ConnectionOptions = {
//     type: 'postgres',
//     host: process.env.POSTGRES_HOST,
//     port: Number(process.env.POSTGRES_PORT),
//     username: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DB,
//     entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
//     synchronize: true,
// };

export default config;