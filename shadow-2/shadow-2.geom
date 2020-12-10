#version 330 core
        
layout(triangles) in;
layout(triangle_strip, max_vertices = 36) out;

uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;

in vec4 vfrontColor[];
out vec4 gfrontColor;

uniform mat4 modelViewProjectionMatrix;

void main( void )
{
	for( int i = 0 ; i < 3 ; i++ )
	{
		gfrontColor = vfrontColor[i];
		gl_Position = modelViewProjectionMatrix * gl_in[i].gl_Position;
		EmitVertex();
	}
    EndPrimitive();
    
    gfrontColor = vec4(0);
    for( int i = 0 ; i < 3 ; i++ )
	{
		vec4 P = gl_in[i].gl_Position;
		P.y *= 0.01;
		P.y += boundingBoxMin.y;
		gl_Position = modelViewProjectionMatrix * P;
		EmitVertex();
	}
    EndPrimitive();
     
    if(gl_PrimitiveIDIn == 0) {
    	gfrontColor = vec4(0, 1, 1, 1);
    	float r=length(boundingBoxMax-boundingBoxMin)/2;
    	vec3 rc=(boundingBoxMax+boundingBoxMin)/2;
    	rc.y=boundingBoxMin.y-0.01;
    	
    	// calculamos los 4 puntos
    	//Abajo izquierda
    	gl_Position = modelViewProjectionMatrix * vec4(rc.x-r, rc.y, rc.z-r, 1);
    	EmitVertex();
    	
    	//Abajo derecha
    	gl_Position = modelViewProjectionMatrix * vec4(rc.x + r, rc.y, rc.z-r, 1);
    	EmitVertex();
    	
    	//Arriba izquierda
    	gl_Position = modelViewProjectionMatrix * vec4(rc.x - r, rc.y, rc.z+r, 1);
    	EmitVertex();
    	
    	//Arriba derecha
    	gl_Position = modelViewProjectionMatrix * vec4(rc.x+r, rc.y, rc.z+r, 1);
    	EmitVertex();
    	EndPrimitive();   	
    }    
}
