import * as mongoose from 'mongoose';

export const CounterSchema = new mongoose.Schema({
    persons: Number
});