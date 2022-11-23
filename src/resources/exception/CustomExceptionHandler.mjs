import CustomErrorDto from "../../dtos/CustomErrorDto.mjs";
import AccessDeniedError from "../../configs/security/errors/AccessDeniedError.mjs";

export default function CustomExceptionHandler(err, req, res, next) {
    console.log(err)
    if (err instanceof CustomErrorDto) {
        res.send(err);
    } else if (err instanceof AccessDeniedError)
        res.status(403).send(err);
    else {
        res.status(500).send(new CustomErrorDto(-1));
    }
}