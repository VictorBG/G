#include "Volume.h"
#include "glwidget.h"

void Volume::onPluginLoad()
{
	const vector<Object> &objs = scene()->objects();
	int num_obj = objs.size();
	float area= 0.0f;
	for(int i=0; i< num_obj; i++) {
		const Object& obj = objs[i];
		const vector<Vertex> &vertices = obj.vertices();
		const vector<Face> &faces = obj.faces();
		for(int j = 0; j< faces.size(); j++) {
			int index1 = faces[i].vertexIndex(0);
			int index2 = faces[i].vertexIndex(1);
			int index3 = faces[i].vertexIndex(2);
			Vertex v1 = vertices[index1];
			Vertex v2 = vertices[index2]; 
			Vertex a = QVector3D::crossProduct(vertices[index1],vertices[index2]);
			float A = 1.0f;
			area += ((vertices[index1] + vertices[index2] + vertices[index3]).z() / 3.0f) * faces[i].normal().z() * A;
		}
	}
	
	cout << "Volume: " << area << endl;
}

void Volume::preFrame()
{
	
}

void Volume::postFrame()
{
	
	
}

void Volume::onObjectAdd()
{
	
}

bool Volume::drawScene()
{
	return false; // return true only if implemented
}

bool Volume::drawObject(int)
{
	return false; // return true only if implemented
}

bool Volume::paintGL()
{
	return false; // return true only if implemented
}

void Volume::keyPressEvent(QKeyEvent *)
{
	
}

void Volume::mouseMoveEvent(QMouseEvent *)
{
	
}



