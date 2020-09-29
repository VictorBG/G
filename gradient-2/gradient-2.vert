#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;

void main()
{

    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
    
    float dist = gl_Position.y/ gl_Position.w + 1.0;
    // Va entre 0 y 2 porque la bounding box va entre -1 y 1 = 2 de diferencia
    if (dist == 0) {
    	frontColor = vec4(1,0,0,1);
    }
    else if (dist < 0.5) {
    	frontColor = mix(vec4(1,0,0,1), vec4(1,1,0,1), fract(dist * 2));
    }
    
    else if (dist < 1) {
    	frontColor = mix(vec4(1,1,0,1), vec4(0,1,0,1), fract(dist * 2));
    }
    
    else if (dist < 1.5) {
    	frontColor = mix(vec4(0,1,0,1), vec4(0,1,1,1), fract(dist* 2));
    }
    
    else if (dist < 2) {
    	frontColor = mix(vec4(0,1,1,1), vec4(0,0,1,1), fract(dist * 2));
    }
    
    else {
    	frontColor = vec4(0,0,1,1);
    }
}
