<?php

namespace FleetCart\Helpers;

class InternetBikes
{
   
    public static function login()
    {
        if (file_exists(public_path('portal-internet.json'))) {
            $response = (file_get_contents(public_path('portal-internet.json')));
            $dataToken = json_decode($response);
            if (isset($dataToken->valid_until) && $dataToken->valid_until > time())
            return $dataToken;
        }
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://portal.internet-bikes.com/api/twm/auth/authenticate",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => ['email'=>'charlesejim@gmail.com','password'=>'Samlondon36'],
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            return $err;
        } else {
            if (isset($response->token) && !empty($response->token)) {
                file_put_contents(public_path('portal-internet.json'),$response);
                return $response;
            }else {
                return false;
            }
        }
    }

    public static function getProducts($page=0)
    {
        $accessTokenRow = self::login();
        if (!$accessTokenRow) return false; 
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://portal.internet-bikes.com/api/twm/products?page=0",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "authorization: Bearer {$accessTokenRow->token}",
            ),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            return $err;
        } else {
            return $response;
        }
    }

    public static function getProPlusProducts()
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://pateurope.com/api/v2/product",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "authorization: Bearer de035cbd6b0b14eb592c39265e89a495f9541a4e7cff2fb8940b9d3b8b8a186ec2522fe9452c4dfc805eb87c7dfe4b14fb22dd70651bb433b91e12244fe0936e"
            ),
        ));
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            return $err;
        } else {
            return $response;
        }
    }
}
