#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;


uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;
uniform mat4 modelViewMatrixInverse;
uniform bool world;
uniform vec4 lightPosition; 

out vec3 N;
out vec3 V;
out vec3 L;

void main()
{

    if (world) {
    	N = normal;
    	L = (modelViewMatrixInverse * lightPosition).xyz - vertex;
    	V = (modelViewMatrixInverse * vec4(0.0,0.0,0.0,1.0)).xyz - vertex;
    } else {
    	vec3 pos = (modelViewMatrix * vec4(vertex, 1.0)).xyz; 
    	N = normalMatrix * normal;
    	L = lightPosition.xyz - pos;   
    	V = -pos;
    }
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
      
}


