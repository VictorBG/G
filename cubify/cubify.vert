#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

vec3 cube(vec3 v) {
	float b = 0.0;
	if (abs(v.x) >= abs(v.y) && abs(v.x) >= abs(v.z)) {
		b = abs(v.x);
	}
	
	if (abs(v.y) >= abs(v.x) && abs(v.y) >= abs(v.z)) {
		b = abs(v.y);
	}
	
	if (abs(v.z) >= abs(v.x) && abs(v.z) >= abs(v.y)) {
		b = abs(v.z);
	}
	
	return v / b;
}

void main()
{
    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(color,1.0);
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(cube(vertex), 1.0);
}  
