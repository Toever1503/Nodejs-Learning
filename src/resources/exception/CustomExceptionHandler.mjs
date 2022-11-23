import CustomErrorDto from "../../dtos/CustomErrorDto.mjs";

export default function CustomExceptionHandler(err, req, res, next) {
    console.log(err)
    if (err instanceof CustomErrorDto) {
        res.send(err);
    } else {
        res.send(new CustomErrorDto(-1));
    }
}