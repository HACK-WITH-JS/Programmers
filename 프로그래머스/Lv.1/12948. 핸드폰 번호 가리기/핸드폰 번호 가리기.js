function solution(phone_number) {
    const phoneNumberLength = phone_number.length;
    return "*".repeat(phoneNumberLength - 4) + phone_number.substring(phoneNumberLength-4, phoneNumberLength);
}