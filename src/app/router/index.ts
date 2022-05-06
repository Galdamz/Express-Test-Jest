import { Router } from 'express';
import http from 'http-status-codes';

const index = Router();

index.get('/', (req, res) => {
    res.status(http.ACCEPTED).json({
        message: http.getStatusText(http.ACCEPTED)
    });
});

export default index;