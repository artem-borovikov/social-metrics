module.exports = [
    {
        type: `postgres`,
        url: process.env.POSTGRES_URL,
        synchronize: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
    },
];
