#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

uniform vec4 lightAmbient; 
uniform vec4 lightDiffuse; 
uniform vec4 lightSpecular;
uniform vec4 lightPosition; 

uniform vec4 matAmbient; 
uniform vec4 matDiffuse; 
uniform vec4 matSpecular; 
uniform float matShininess; 

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

void main()
{
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
    
    vec3 position = (modelViewMatrix * vec4(vertex, 1)).xyz;
    vec3 N = normalize(normalMatrix * normal);
    vec3 L = normalize(lightPosition.xyz - position);
    float NL = dot(N, L);
    vec3 V = normalize(-position).xyz;
    frontColor = lightAmbient * matAmbient + matDiffuse * lightDiffuse * max(0.0, NL);
    if (NL > 0.0) {    	
    	vec3 R = normalize(2 * NL * N - L);
    	float RV = dot(R, V);
    	frontColor = frontColor + matSpecular * lightSpecular * max(0.0, pow(RV, matShininess));	
    }
    vtexCoord = texCoord;
}
