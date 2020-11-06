#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;


uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;
uniform mat4 modelViewMatrixInverse;
uniform vec4 lightPosition; 

out vec3 N;
out vec3 P;
out vec3 V;

out vec3 l1,l2,l3,l4,l5,l6,l7,l8;

uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;


void main()
{

	N = normal;
	P = vertex;
	V = (modelViewMatrixInverse * vec4(0.0,0.0,0.0,1.0)).xyz - vertex;
	
	l1 = boundingBoxMax;
	l2 = vec3(boundingBoxMin.x, boundingBoxMax.y, boundingBoxMax.z);
	l3 = vec3(boundingBoxMin.x, boundingBoxMax.y, boundingBoxMin.z);
	l4 = vec3(boundingBoxMax.x, boundingBoxMax.y, boundingBoxMin.z);
	
	l5 =  boundingBoxMin;
	l6 =  vec3(boundingBoxMax.x, boundingBoxMin.y, boundingBoxMin.z);
	l7 =  vec3(boundingBoxMax.x, boundingBoxMin.y, boundingBoxMax.z);
	l8 =  vec3(boundingBoxMin.x, boundingBoxMin.y, boundingBoxMax.z);
    
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
      
}


