#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;
uniform sampler2D colorMap;

uniform sampler2D fbm;
uniform float time;
const float pi = 3.15159;
const float portion = 2.0/6.0;

const vec4 RED = vec4(1,0,0,1);
const vec4 YELLOW = vec4(1,1,0,1);
const vec4 GREEN = vec4(0,1,0,1);
const vec4 CYAN = vec4(0,1,1,1);
const vec4 BLUE = vec4(0,0,1,1);
const vec4 MAGENTA = vec4(1,0,1,1);


vec4 mx(vec4 color1, vec4 color2, float grad) {
	// grad * 1/portion para pasarlo a rango [0,1], asi la parte fraccionaria se calcula bien
	return mix(color1, color2, fract(grad * 1/portion));
}

void main()
{
	vec4 fbm = texture(fbm, vtexCoord);
	float grad =1* /*A*/ sin(2 * pi * 0.1 /*f*/ * time + (2*pi*fbm.r) /*phi*/);
	grad += 1; // para convertirlo en [0,2]
	if(grad == 0) {
		fragColor = RED;
	}
    else if (grad < portion) {
    	fragColor = mx(RED, YELLOW, grad);
    }
    
    else if (grad < portion * 2) {
    	fragColor = mx(YELLOW, GREEN, grad);
    }
     
    else if (grad < portion * 3) {
    	fragColor = mx(GREEN, CYAN, grad);
    }
    
    else if (grad < portion * 4) {
    	fragColor = mx(CYAN, BLUE, grad); 
    }
    
    else if (grad < portion * 5) {
    	fragColor = mx(BLUE, MAGENTA, grad);
    }
    
    else if (grad < portion * 6) {
    	fragColor = mx(MAGENTA,RED, grad);
    }
    else {
    	fragColor = RED;
    }
}
