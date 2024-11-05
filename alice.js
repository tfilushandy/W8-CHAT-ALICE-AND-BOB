const crypto = require("crypto");

const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzSgV+KB8qXhaPzZpjyzr
gjtem3fuwSfNHousKKFG+2+gOWZBWo6J/JXihI6URvzOIk3ky/un4kc1r5SlPcb9
ByK7oI8k2MTcDE5KJBx839DpKwdxGNtmONi0YiTNEo6fM2h6J8lzlMNzPnHx2R7k
nmgMLKZ60lKpI7ntLqwZB64tvt8MUF+Res3Cuqu6pz+NctwKBI+zhM6sZjdXoHjg
2S1o6s5QMtHDwDkcjRBciNKsmxvJsYP1bWGGSoimOaKL7av2TOBDmGE11ouuX9o3
a6YpWuV+Kb9J8i9ano9UAm4D3wg7GP/usUfmA4AfAo8LxKB3k1VpOw/6kjHytgwu
xwIDAQAB
-----END PUBLIC KEY-----`;
const alicePublicKey = crypto.createPublicKey(alicePublicKeyPem);

const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNKBX4oHypeFo/
NmmPLOuCO16bd+7BJ80ei6wooUb7b6A5ZkFajon8leKEjpRG/M4iTeTL+6fiRzWv
lKU9xv0HIrugjyTYxNwMTkokHHzf0OkrB3EY22Y42LRiJM0Sjp8zaHonyXOUw3M+
cfHZHuSeaAwspnrSUqkjue0urBkHri2+3wxQX5F6zcK6q7qnP41y3AoEj7OEzqxm
N1egeODZLWjqzlAy0cPAORyNEFyI0qybG8mxg/VtYYZKiKY5oovtq/ZM4EOYYTXW
i65f2jdrpila5X4pv0nyL1qej1QCbgPfCDsY/+6xR+YDgB8CjwvEoHeTVWk7D/qS
MfK2DC7HAgMBAAECggEAHVLu/Qg3eWO+Bo4I/ZGOoiFJTxCP/GTrgUO2mmIfCr50
WPAARGjeWU+1PnxAvnrRHf8jRnLUltfV2SB2lAN21EfHKNZ9DkzpJQslts6pnLY4
NdHM/SATFuoGsoaPF2lyYP88gqZdUnSzasgPqRis1eWKY/Fx2dE94uDnAYZQ15Nw
touBv2ZbQsEmAQbtYQu3FQboAGPTSUvKlvXMeS9Icge1xYaNzvgZIt3Gn1Wk1brS
SklOAz/xs9Vqg1exAcccBXhXDfulEE/x/rnjKb4X+Y5cxNTI4tU3fzbQhZqRFoct
VOgsLyvIQRVj3W5B7HxQxcmqa3a8hJ2c9Ihz7D3VxQKBgQD4LWL25+5I78e07rVU
D25+F3xsmipqYRvQCuHZVMIou3/Fk0+ODqYe526DQvDCo4RBWNAkgp5zQIb6Y8Ij
8eKBzrE5JfBBZ1aNkZ/W/dSb6Tv5SAWH9K/xmkCzNhbpa/GNygMBxoiy32mvpTuz
9wjT4mfJ26gKXxP8cfiQ9M0GcwKBgQDTn42J3v2m58r2aZFpJiQbnu4QZ+1ZgYPw
2KboJzygHOio0JC3vf3dovFkVmZ8ml4CZX32am7SbndcnbT+1LUglThZsdtOUP0K
D0dQHeYF/a9Ac69IoHxO/7+L+PQyGOCDzHoJh1/sqpfNRIG70k4zkB1RKndpLgxf
y0ajLI8NXQKBgBfAQDhg+e0BBZvLPI9O6sQme0HpfyWvJXpDkFm8QtijGRdPgc2W
mU9b1re5MFFwVLfsR/82gPOGuWQ9J9dIzuSdY1iUyOl5ek8SILnykOZa6+JvghgA
0tXMbWS5SHgOXI+1RZRl668ysmqc5ZnTioS8pjIrU2mqr775KVC2HOkBAoGAGrN9
+1Bcdsu2SyMEytyaH7YM2ZsTUoDJ8gCUBqS0vIsJPAucxuI8/tMJXByer8gWZn0B
yK6jLv/rJY9sf968v9C0HHUZc6c6ViOZXt124XihvSMbkbFWHe2c8H9H6G5FHbwW
Bc/D5aucnbSwHc+qOE1NtakDCg1aWFfgoMQFhK0CgYEAw2njOmmnr/18q6HJ2azT
OrewhFbIxhin3JNEauh2rhJAtuaq9bwHHCwGcR7nz23w4WTuWY/MBL2Y7rOTZP+b
Vz1yZEHJ+vdCbUwqJAkNBvyDHGiJ49OGG6nPhd4vYrWmj2OJqoz9sWRWqSycuie6
y3aP1bxCVdaEDLe5Vd39ESc=
-----END PRIVATE KEY-----`;
const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyBBmYbsNhZzgnzcB1C2P
aL5Ce13pK94vxk5sSB8F2wWJwTBi14V9VjsWUi13HZ4CIYB2JDKz55CKxg4SYlIc
mvtaCb2Bu7PC3qyeyehVGBQQKbml0QTg9wNuWJIGExncpzOHvTrI/KFDbUtZ46iG
bNfhyZogmmngMw7iMGrtP4O87saBtAinyg4xOC9qJKhM6PL2khDbHCH67Si9o6cp
AHVdJydhk/Cti79IL9j1XcYsPD/bBnV6fIugLHiLcOq0c2xtXCaKu555Ch9fWdq9
ntW2HI+rJpYnmiSNmLgxierQ0XMKW03l09/B5TeLEpvy/RiNqvOxb2azH1vQ8emi
+QIDAQAB
-----END PUBLIC KEY-----`;
const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);


const message = "I want some apples";
console.log("Message:", message);

const data = Buffer.from(message);
const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));


const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Ciphertext:", ciphertext.toString("hex"));