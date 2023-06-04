/*
 * @Author: Lee
 * @Date: 2023-05-28 12:40:58
 * @LastEditTime: 2023-06-04 12:05:58
 * @LastEditors: Lee
 */
import React, { useEffect, useRef } from 'react';
import './App.css';

import * as THREE from 'three';

function App() {
  const mapRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<any>(null);
  let renderer: any;
  let scene: any;
  let camera: any;

  useEffect(() => {
    if (mapRef.current) {
      const width = window.innerWidth; //窗口宽度
      const height = window.innerHeight; //窗口高度

      // 1、创建场景
      scene = new THREE.Scene();

      // 2、创建相机（透视投影相机）
      camera = new THREE.PerspectiveCamera(
        50, // 相机视野
        window.innerWidth / window.innerHeight, // 水平方向和竖直方向长度的比值
        0.1, // 近端渲染距离
        1000 // 远端渲染距离
      );
      // 2.1 设置相机位置
      // camera.position.x = 5;
      // camera.position.y = 10;
      // camera.position.z = 10;
      // 2.1 设置相机位置简写方式：
      camera.position.set(5, 10, 10);

      // 4、创建几何体模型（立方几何体）
      var geometry = new THREE.BoxGeometry(2, 2, 2);

      // 5、创建材质（基础网格材质和法线网格材质）
      // 5.1 创建基础网格材质
      var materialBasic = new THREE.MeshBasicMaterial({
        color: 0xffffff, // 白色
        // color: 0x00ff00, // 绿色
        wireframe: false //是否将几何体渲染为线框，默认值为false（即渲染为平面多边形）
      });
      // 5.2 创建法线网格材质
      var materialNormal = new THREE.MeshNormalMaterial();

      // 6、创建多种网格（因为有多个材质）
      // 第一个参数是几何模型，第二参数是材质
      cubeRef.current = new THREE.Mesh(geometry, materialNormal);

      // 6.1、将网格添加到场景中
      scene.add(cubeRef.current);
      // 6.2 让相机 看向（对着）物体（拍摄对象）的位置（默认状态下，相机将指向三维坐标系的原点。）
      camera.lookAt(cubeRef.current.position);

      // 7、创建光源
      var spotLight = new THREE.SpotLight(0xff0000);
      // 7.1 设置光源位置
      spotLight.position.set(20, 20, 20);
      // 7.2 设置光源照射的强度，默认值为 1
      spotLight.intensity = 5;
      // 7.3 将光源添加到场景中
      scene.add(spotLight);

      //环境光
      var ambient = new THREE.AmbientLight(0x444444);
      scene.add(ambient);

      // 8、为了方便观察3D图像，添加三维坐标系对象
      var axes = new THREE.AxesHelper(40);
      scene.add(axes);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      mapRef?.current?.appendChild(renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      renderer.render(scene, camera);
    }
  }, []);

  function animate() {
    //循环调用函数
    requestAnimationFrame(animate);
    // 每一次animate函数调用，都让网格比上一次 X 轴、Y 轴各旋转增加 0.01 弧度
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.1;
      cubeRef.current.rotation.y += 0.1;
    }
    // 渲染器结合场景和相机进行渲染
    renderer.render(scene, camera);
  }

  useEffect(() => {
    animate();
  }, []);

  return <main className="App" ref={mapRef}></main>;
}

export default App;
