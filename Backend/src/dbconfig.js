import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: '192.168.12.24',
    user:'root',
    port: 3306,
    password: '',
    database: 'transform_cars'  
})