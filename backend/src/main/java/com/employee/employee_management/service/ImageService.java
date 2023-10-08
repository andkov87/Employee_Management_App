package com.employee.employee_management.service;

import org.springframework.stereotype.Service;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

@Service
public class ImageService {

    public byte[] decodeBase64Image(String imageData) {

        /*String profilePicString = URLDecoder.decode(imageData, StandardCharsets.UTF_8);
        profilePicString = profilePicString.replace(" ","+");*/

        String imageDataWithoutPrefix = imageData.replaceFirst("data:image/[a-zA-Z]*;base64,", "");
        byte[] imageDataBytes = Base64.getDecoder().decode(imageDataWithoutPrefix);

        return imageDataBytes;
    }
}
