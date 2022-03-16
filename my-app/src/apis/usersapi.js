import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2043/'
 });
 
 export const UserAPI = {
     getAll: function() {
         return axiosInstance.request({
             method: "GET",
             url: `/api/v1/users`
         });
     },
     getById: function(userId) {
         return axiosInstance.request({
             method: "GET",
             url: `/api/v1/users/${userId}`
         });
     },
     create: function(user) {
         return axiosInstance.request({
             method: "POST",
             url: `/api/v1/users`,
             data: user
         });
     },
     update: function(userId, user) {
         return axiosInstance.request({
             method: "PUT",
             url: `/api/v1/users/${userId}`,
             data: user,
         });
     },
 }