#ifndef _FRAMERATE_H
#define _FRAMERATE_H

#include "plugin.h" 
#include <QElapsedTimer>
#include <QPainter>

class Framerate: public QObject, public Plugin
{
	Q_OBJECT
	Q_PLUGIN_METADATA(IID "Plugin") 
	Q_INTERFACES(Plugin)

  public:
	 void onPluginLoad();
	 void preFrame();
	 void postFrame();

	 void onObjectAdd();
	 bool drawScene();
	 bool drawObject(int);

	 bool paintGL();

	 void keyPressEvent(QKeyEvent *);
	 void mouseMoveEvent(QMouseEvent *);
  private:
	// add private methods and attributes here
	QElapsedTimer elapsedTimer;
	QPainter painter;
};

#endif
