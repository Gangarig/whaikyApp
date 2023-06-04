import React from 'react';
import { useNavigate } from 'react-router-dom';

let instance = useNavigate();

export const Navigate = (param) => {
    instance(param);
};