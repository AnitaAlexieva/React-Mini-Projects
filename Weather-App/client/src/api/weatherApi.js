import { requester } from "../utils/requester"

export const getWreather = async (cityName) => {
    const data = await requester(
        `/weather?q=${cityName}&appid=443e51215c2f4f0eaf705b1659b6d924&units=metric`,
        "GET"
    );

    return data;
};
