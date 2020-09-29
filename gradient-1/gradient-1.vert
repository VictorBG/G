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
    float diff = boundingBoxMax.y - boundingBoxMin.y;
    float cordy = vertex.y - boundingBoxMin.y;
    float dist = cordy/diff;
    // Va entre 0 y 1 porque la posicion es relativa a la bounding box, por lo que el valor mas alto es 1
    if (dist == 0) {
    	frontColor = vec4(1,0,0,1);
    }
    else if (dist < 0.25) {
        // se multiplica por 4 para ponerlo sobre 1 y asi la parte fraccionaria sea buena y pueda dibujar correctamente las interpolaciones
    	frontColor = mix(vec4(1,0,0,1), vec4(1,1,0,1), fract(dist * 4));
    }
    
    else if (dist < 0.5) {
    	frontColor = mix(vec4(1,1,0,1), vec4(0,1,0,1), fract(dist * 4));
    }
    
    else if (dist < 0.75) {
    	frontColor = mix(vec4(0,1,0,1), vec4(0,1,1,1), fract(dist* 4));
    }
    
    else if (dist < 1) {
    	frontColor = mix(vec4(0,1,1,1), vec4(0,0,1,1), fract(dist * 4));
    }
    
    else {
    	frontColor = vec4(0,0,1,1);
    }
    

    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
