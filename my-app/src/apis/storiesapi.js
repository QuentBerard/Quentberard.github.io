import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2043/'
 });
 
 export const StoriesApi = {
     getAll: function() {
         return axiosInstance.request({
             method: "GET",
             url: `/api/v1/story`
         });
     },
     getById: function(storyId) {
         return axiosInstance.request({
             method: "GET",
             url: `/api/v1/story/${storyId}`
         });
     },
     create: function(story) {
         return axiosInstance.request({
             method: "POST",
             url: `/api/v1/story`,
             data: story,
         });
     },
     update: function(storyId, story) {
         return axiosInstance.request({
             method: "PUT",
             url: `/api/v1/story/${storyId}`,
             data: story,
         });
     },
     delete: function(storyId){
        return axiosInstance.request({
            method: "DELETE",
            url: `/api/v1/story/${storyId}`,
            data: storyId,
        });
    },
 }